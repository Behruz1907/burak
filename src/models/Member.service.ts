import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";

import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Error";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    console.log("exist", exist);
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);

    try {
      const result = await this.memberModel.create(input);
      result.memberpassword = "";
      return result;
    } catch (err: any) {
      // Provide error details and a status code to Errors constructor
      const message = err?.message || "Failed to process signup";
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
    }
  }
}

export default MemberService;



























// import { Member, MemberInput } from "../libs/types/member";
// import MemberModel from "../schema/Member.model";

// class MemberService {
//     private readonly memberModel;
//     constructor() { 
//         this.memberModel = MemberModel;
//     }
//         // Promise faqatgina async ishlatganda ishlatamiz
//     public async processSignup(input: MemberInput): Promise<Member> {
//         const result = await this.memberModel.create(input);
       
//         return result;
//     }
// }

// export default MemberService;