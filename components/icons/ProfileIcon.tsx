import React, { FC, useState, useEffect } from "react";

type Props = {
  href: string;
};

export const ProfileIcon: FC<Props> = (props) => {
  const { href, children } = props;

  return (
      <a
        href={href}
        className=""
      >
        {children}
      </a>

  );
};