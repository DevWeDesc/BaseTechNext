"use client";
import Image from "next/image";
import { Input } from "../Input";
import React, { useEffect, useState } from "react";
import { StateLoginType } from "../../../types/StateLoginType";
import { Button } from "../Button";
import { GoKey, GoPerson } from "react-icons/go";
import Link from "next/link";

export const Login = () => {
  const [user, setUser] = useState<StateLoginType>({ login: "", password: "" });

  useEffect(() => {
    console.log(`Login ${user.login}`);
    console.log(`Senha ${user.password}`);
  }, [user]);

  const handleUserLogin = (ev: string) => {
    setUser({ login: ev, password: user.password });
  };
  const handleUserPassword = (ev: string) => {
    setUser({ login: user.login, password: ev });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <Image
        alt=""
        src="/logo.svg"
        width={162}
        height={162}
        className="mb-10"
      />
      <div className="w-full flex flex-col px-11 gap-4">
        <div className="flex flex-col gap-2">
          <Input
            id="login"
            placeholder="Insira seu Login"
            type="text"
            value={user.login}
            setValue={(ev) => handleUserLogin(ev)}
            Icon={<GoPerson className="text-base" />}
          />
          <Input
            id="password"
            placeholder="Insira sua Senha"
            type="password"
            value={user.password}
            setValue={(ev) => handleUserPassword(ev)}
            Icon={<GoKey className="text-base" />}
          />
        </div>
        <div className="flex flex-col gap-5">
          <Link href="/Home">
            <Button title="Entrar" />
          </Link>
          <Link
            href="/CreateAccount"
            className="text-xs text-center text-white opacity-70 transition-all hover:opacity-100"
          >
            Não tem uma conta?{" "}
            <span className="text-xs opacity-100 font-semibold">
              Cadastre-se
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
