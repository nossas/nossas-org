import { Image, Link } from "@chakra-ui/react";

export const ImageLogo = ({ logo }: any) => {
  const image = (
    <Image src={logo?.src || logo} alt="" width={["80%", "50%", "unset"]} />
  );

  if (logo?.href) {
    return (
      <Link href={logo.href} isExternal>
        {image}
      </Link>
    );
  }

  return image;
};
