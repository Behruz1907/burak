import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    // res types => send | json | redirect | end | render
    // Logic
    // Service Model
    // ...
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

restaurantController.processLogin = async(req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;

    const memberService = new MemberService();
   const result = await memberService.processLogin(input);
    res.send(result);
  } catch (err) {
    console.log("Error, processLogin:", err);
    res.send(err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);
    console.log(1);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    
     console.log(2);
    const memberService = new MemberService();
    // await memberService.processSignup(newMember);
    const result = await memberService.processSignup(newMember);
     console.log(6);
    res.send(result)
    // res.send("DONE");
  } catch (err) {
     console.log(7);
    console.log("Error, processSignup!!!!!!!", err);
    res.send(err);
  }
};

export default restaurantController;
























// restaurantController.processSignup = async (req: Request, res: Response) => {
//   try {
//     console.log(1)
//     console.log("processSignup");
//     console.log("body", req.body);
//      console.log(2)
//     const newMember: MemberInput = req.body;
//     newMember.memberType = MemberType.RESTAURANT;
//     const memberService = new MemberService();
//     const result = await memberService.processSignup(newMember);
//      console.log(6)

//     res.send(result);
//   } catch (err) {
//      console.log(7)
//     console.log("Error, processSignup:", err);
//     res.send(err)
//   }
// };

// export default restaurantController;












































// import express, { Request, Response } from "express";
// import { T } from "../libs/types/common";
// import MemberService from "../models/Member.service";
// import { MemberInput } from "../libs/types/member";
// import { MemberType } from "../libs/enums/member.enum";

// const restaurantController: T = {};
// restaurantController.goHome = (req: Request, res: Response) => {
//     try {
//         // LOGIC
//         // SERVICE MODEL 
//         // ...
//         console.log('goHome');
//         res.send("Home Page");
//         // send | json | redirect | end | render ==> response turlari
//     } catch (err) {
//         console.log("Error, goHome:", err);
//     }

// };

// restaurantController.getLogin = (req: Request, res: Response) => {
//     try {
//         console.log('getLogin');
//     res.send("Login Page");
//     } catch (err) {
//         console.log("Error, getLogin:", err);
//     }

// };

// restaurantController.getSignup = (req: Request, res: Response) => {
//     try {
//         console.log('getSignup');
//     res.send("Signup Page");
//     } catch (err) {
//         console.log("Error, getSignup:", err);
//     }

// };

// restaurantController.processLogin = (req: Request, res: Response) => {
//     try {
//         console.log('processLogin');
//         res.send("DONE");
   
//     } catch (err) {
//         console.log("Error, processLogin:", err);
//     }

// };

// restaurantController.processSignup = async (req: Request, res: Response) => {
//     try {
//         console.log('processSignup');
//         console.log("body:", req.body);

//         const newMember: MemberInput = req.body;
//         newMember.memberType = MemberType.RESTAURANT;


//         const memberService = new MemberService();
//         const result = await memberService.processSignup(newMember);
        
//         res.send(result);
   
//     } catch (err) {
//         console.log("Error, processSignup:", err);
//     }

// };



// export default restaurantController;