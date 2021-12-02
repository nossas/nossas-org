import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_FORM_ENTRY_GQL = gql`
  mutation(
    $activist: ActivistInput!
    $input: FormEntryInput!
    $widget_id: Int!
  ) {
    create_form_entry(
      activist: $activist
      input: $input
      widget_id: $widget_id
    ) {
      data
    }
  }
`;

type ActivistInput = {
  name?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
};

type FormEntry = {
  // ADICIONEI A OPÇÃO "PHONE" VISTO QUE ESSA INTEGRAÇÃO CONSIDERA
  // MELHORIAS NAS WIDGETS
  kind: "text" | "email" | "number" | "dropdown" | "grettings" | "phone";
  label: string;
  placeholder?: string;
  required: boolean;
  uid: string;
  value?: string;
};

type FormEntryInput = {
  fields: FormEntry[];
};

interface Variables {
  activist: ActivistInput;
  input: FormEntryInput;
  widget_id: number;
}

interface Result {
  data: {
    id: number;
    created_at: string;
  };
}

interface Props {
  widgetId: number;
  children: any;
  successComponent: any;
}

const getKindByName = (
  fieldName: string
): "text" | "email" | "number" | "phone" | "dropdown" => {
  switch (fieldName) {
    case "whatsapp":
    case "phone":
      return "phone";
    case "email":
      return "email";
    // Entender a necessidade de adicionar um tipo de campo endereço
    case "state":
      return "dropdown";
    default:
      return "text";
  }
};

const SubmitFormEntry: React.FC<Props> = ({
  children,
  widgetId,
  successComponent: SuccessComponent,
}) => {
  const [data, setData] = useState(undefined);
  const [createFormEntry] = useMutation<Result, Variables>(
    CREATE_FORM_ENTRY_GQL
  );

  // render children with submit(values: any)
  return data ? (
    <SuccessComponent data={data} />
  ) : (
    children({
      submit: async (formData: any, formActions: any) => {
        try {
          const fields: FormEntry[] = Object.keys(formData).map(
            (keyName: string) => {
              return {
                kind: getKindByName(keyName),
                label: keyName,
                required: false,
                value: formData[keyName],
                uid: `${keyName}-${widgetId}`,
              };
            }
          );

          const { data } = await createFormEntry({
            variables: {
              widget_id: widgetId,
              activist: {
                name:
                  formData.name ||
                  `${formData.first_name} ${formData.last_name}`.trim(),
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.whatsapp || formData.phone,
              },
              input: { fields },
            },
          });

          setData({ data, formData });
        } catch (err) {
          console.log("SubmitFormEntry failed!", { err });
          formActions.setErrors({
            form: "OPS! Houve um problema, tente novamente mais tarde.",
          });
          throw new Error("SubmitFormEntry failed!");
        }
      },
    })
  );
};

export default SubmitFormEntry;
