import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Error";
import { MemberInput, Member, LoginInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import * as bcrypt from "bcryptjs";

class MemberService {
  private readonly memberModel;
  constructor() {
    this.memberModel = MemberModel;
  }


  /*SPA */
  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
  
    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result.toJSON();
    } 
    catch (err) {
      console.error('Error, model:signup', err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    // TODO: Consider member status later
    const member = await this.memberModel
      .findOne({ memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 })
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);


    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );
    // const isMatch = input.memberPassword === member.memberPassword;
    if (!isMatch) {
         throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    } 

    return await this.memberModel.findById(member._id).lean().exec();

}

  /*SSR */

  public async processSignup(input: MemberInput): Promise<Member> {

    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    console.log("exist", exist);
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);


    console.log("before:", input.memberPassword);
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
    console.log("after:", input.memberPassword);

     console.log(4);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
       console.log(5);
      return result;
    } 
    catch (err) {
      // Provide error details and a status code to Errors constructor
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
    }
  }

  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne({ memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 })
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);


    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );
    // const isMatch = input.memberPassword === member.memberPassword;


  
    
    if (!isMatch) {
         throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    } 

    return await this.memberModel.findById(member._id).exec();

}
}

export default MemberService; 



















    

























