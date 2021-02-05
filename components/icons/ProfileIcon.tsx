import React, { FC, useState, useEffect } from "react";

type Props = {
  href: string;
  name: string;
};

export const ProfileIcon: FC<Props> = (props) => {
  const { href, name, children } = props;

  return (
      <a
        href={href}
        className=""
        aria-label={name}
      >
        {children}
      </a>

  );
};