import React from "react";
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
  name: string;
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

const SubmitFormEntry: React.FC<Props> = ({ children, widgetId }) => {
  const [createFormEntry] = useMutation<Result, Variables>(
    CREATE_FORM_ENTRY_GQL
  );

  // render children with submit(values: any)
  return children({
    submit: async (formData: any) => {
      const fields: FormEntry[] = Object.keys(formData).map(
        (keyName: string) => {
          return {
            kind: getKindByName(keyName),
            label: "",
            required: false,
            value: formData[keyName],
            uid: `${keyName}-${widgetId}`,
          };
        }
      );

      const { data, errors } = await createFormEntry({
        variables: {
          widget_id: widgetId,
          activist: {
            name: formData.name,
            email: formData.email,
            phone: formData.whatsapp || formData.phone,
          },
          input: { fields },
        },
      });

      if (errors) {
        console.log("SubmitFormEntry failed!", { errors });
        throw new Error("SubmitFormEntry failed!");
      }

      return data;
    },
  });
};

export default SubmitFormEntry;
