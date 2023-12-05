"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import Link from "next/link";

export const CreateAccontComponent = () => {
  return (
    <div className="flex flex-col items-center py-24 w-full ">
      <Image
        alt=""
        src="/logo.svg"
        className="mb-11"
        width={162}
        height={162}
      />
      <div className="w-full flex flex-col gap-4">
        <div className="w-full px-11 flex flex-col gap-2">
          <Input id="name" placeholder="Insira seu Nome" type="text" />
          <Input id="cpf" placeholder="Insira seu CPF" type="text" />
          <Input id="phone" placeholder="Insira seu Telefone" type="text" />
          <Input id="email" placeholder="Insira seu E-mail" type="text" />
          <Input
            id="instagram"
            placeholder="Insira seu Instagram"
            type="text"
          />
          <Input id="site" placeholder="Insira seu Site" type="text" />
          <Input id="facebook" placeholder="Insira seu Instagram" type="text" />
          <Input id="sector" placeholder="Insira seu Setor" type="text" />
        </div>
        <div className="w-full flex flex-col px-11 gap-4">
          <Link href="/">
            <Button title="Cadastre-se" />
          </Link>
          <Link
            href="/"
            className="text-center text-xs opacity-70 hover:opacity-100 transition-all"
          >
            Já tem uma conta? <span className="font-semibold">Entrar</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
