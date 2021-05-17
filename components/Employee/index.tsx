import React, { useState } from "react";
import {
  Box,
  Stack,
  Image,
  Heading,
  Text,
  SimpleGrid,
  useDisclosure,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import IconEyeSlash from "./IconEyeSlash";

export type Employee = {
  avatar: string;
  name: string;
  role: string;
  about?: string;
  team: string;
  networks?: Record<string, string>;
};

const EmployeeDetails = () => <h2>Employee Details</h2>;

const BtnDetails: React.FC<{ handleClose: any; data: Employee }> = ({
  handleClose,
  data,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Text
        color="white"
        size="sm"
        cursor="pointer"
        ref={btnRef}
        onClick={onOpen}
      >
        Saiba +
      </Text>

      <Drawer
        closeOnOverlayClick={false}
        isOpen={isOpen}
        placement="right"
        size="md"
        onClose={() => {
          onClose();
          handleClose();
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader
              color="pink.main"
              textTransform="uppercase"
              fontSize="md"
            >
              {data.team}
            </DrawerHeader>
            <DrawerCloseButton />

            <DrawerBody>
              <Stack direction="row" spacing="30px" mb="25px">
                <Image src={data.avatar} boxSize="140px" objectFit="cover" />
                <Stack direction="column" spacing="0">
                  <Heading as="h2" fontWeight="bold" size="md">
                    {data.name}
                  </Heading>
                  <Text size="sm">{data.role}</Text>
                </Stack>
              </Stack>
              <Text size="sm">{data.about}</Text>
              {/* <Input placeholder="Type here..." /> */}
            </DrawerBody>

            {/* <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export const EmployeeItem: React.FC<{ data: Employee }> = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <Stack maxW="190px">
      <Box
        position="relative"
        width="190px"
        height="190px"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Image src={data.avatar} boxSize="190px" objectFit="cover" />

        {open && (
          <Box position="absolute" bgColor="rgba(238, 0, 144, 0.4)" top="0">
            <Stack
              width="190px"
              height="190px"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-end"
              padding="12px"
            >
              <IconEyeSlash />
              <BtnDetails data={data} handleClose={() => setOpen(false)} />
            </Stack>
          </Box>
        )}
      </Box>

      <Heading
        as="h3"
        fontWeight="bold"
        size="sm"
        textDecoration={open ? "underline" : "none"}
      >
        {data.name}
      </Heading>

      <Text size="sm">{data.role}</Text>
    </Stack>
  );
};

export const EmployeeTeam: React.FC<{
  title: string;
  description?: string;
  members: Employee[];
}> = ({ title, description, members }) => (
  <Stack direction="column" spacing="30px">
    <Box>
      <Heading as="h2" color="pink.main" fontWeight="700" size="lg">
        {title}
      </Heading>
      {description && <Text>{description}</Text>}
    </Box>
    <SimpleGrid columns={6} columnGap="15px" rowGap="30px">
      {members.map((employee, index: number) => (
        <EmployeeItem key={`employee-${index}`} data={employee} />
      ))}
    </SimpleGrid>
  </Stack>
);
