import React, { ReactElement } from "react";
import { StateLoginType } from "./StateLoginType";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

export type InputType = {
  type: string;
  placeholder: string;
  id: string;
  value?: string;
  setValue?: (ev: any) => any;
  Icon?: ReactElement;
};
