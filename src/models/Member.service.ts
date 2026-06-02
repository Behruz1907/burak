import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Error";
import { MemberInput, Member } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
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
      result.memberPassword = "";
      return result;
    } 
    catch (err) {
      // Provide error details and a status code to Errors constructor
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
    }
  }
}

export default MemberService; 




















//   public async processSignup(input: MemberInput): Promise<Member> {
//     console.log(3)
//     const exist = await this.memberModel
//       .findOne({ memberType: MemberType.RESTAURANT })
//       .exec();
//     console.log("exist:", exist);
//     if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
//      console.log(4)
//     try {
//       const result = await this.memberModel.create(input);

//       //  const tempResult = new this.memberModel(input);
//       //  const result = await tempResult.save();

//       result.memberPassword = "";
//        console.log(5)
//       return result;
//     } catch (err) {
//     console.log("MONGOOSE REAL ERROR:", err); // <--- Mana shu qatorni qo'shing
//     throw new Errors(HttpCode.BAD_REQUEST, Message.CREATED_FAILED);
// }
//   }
// }

// export default MemberService;     



























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