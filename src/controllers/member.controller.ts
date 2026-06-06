import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Error";
import { json } from "node:stream/consumers";
// React

const memberService = new MemberService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
   const input: MemberInput = req.body,
          result: Member = await memberService.signup(input);
       // TODO: TOKENS AUTHENTICATION
    
    res.json({member: result});
   
  } catch (err) {
      console.log("Error, signup:", err);
      if (err instanceof Errors) res.status(err.code).json(err);
      else res.status(Errors.standart.code).json(Errors.standart);
  }
};

memberController.login = async(req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
          result = await memberService.login(input);
       // TODO: TOKENS AUTHENTICATION
      
   res.json({member: result});
  } catch (err) {
    console.log("Error, login:", err);
   if (err instanceof Errors) res.status(err.code).json(err);
   else res.status(Errors.standart.code).json(Errors.standart);
  }
};

export default memberController;