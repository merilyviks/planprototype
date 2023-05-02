"use client";

type textButtonProps = {
  ButtonText: string;
  ButtonLink: string;
  OpenInNewTab: boolean;
};

export default function TextButton({
  ButtonLink,
  ButtonText,
  OpenInNewTab,
}: textButtonProps) {
  return (
    <a
      className="text-button"
      href={ButtonLink}
      target={!OpenInNewTab ? "_self" : "_blank"}
      rel="noopener noreferrer"
    >
      {ButtonText}
    </a>
  );
}
