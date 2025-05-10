import * as z from "zod";

export const PersonalInfoSchema = z.object({
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }),  
  gender: z.enum(["MALE", "FEMALE"], {
    errorMap: () => ({ message: "Please select a valid gender option" }),
  }),
  dateOfBirth: z.coerce
    .date()
    .min(new Date("1900-01-01"), {
      message: "Date of birth is too far in the past",
    })
    .max(new Date(), { message: "Date of birth cannot be in the future" }),
  lastName: z
    .string()
    .min(3, { message: "last name must be at least 3 characters" }),
  firstName: z
    .string()
    .min(3, { message: "first name must be at least 3 characters" }),
  email: z.string().email({ message: "invalid email" }),
  userName: z
    .string()
    .regex(/^0201[A-Za-z]{2,3}\d{6}$/, { message: "invalid username format" }),
});

// export const AcademicInfoSchema = z.object({
//   ugDegree: z.enum(["btech", "mtech", "other"], {
//     errorMap: () => ({ message: "Please select a valid UG degree" }),
//   }),
//   ugBranch: z.string().min(2, { message: "UG branch must be at least 2 characters" }),
//   ugBatch: z
//     .string()
//     .regex(/^\d{4}$/, { message: "UG batch must be a valid year (e.g., 2020)" }),
//   UGCGPA: z
//     .number()
//     .min(0, { message: "UG CGPA cannot be less than 0" })
//     .max(10, { message: "UG CGPA cannot exceed 10" }),
//   ugActiveBacks: z.number().min(0, { message: "Active backs must be at least 0" }),
//   ugTotalBacks: z.number().min(0, { message: "Total backs must be at least 0" }),

//   pgDegree: z.enum(["mtech", "other"], {
//     errorMap: () => ({ message: "Please select a valid PG degree" }),
//   }).optional(),
//   pgBranch: z.string().min(2, { message: "PG branch must be at least 2 characters" }).optional(),
//   pgBatch: z
//     .string()
//     .regex(/^\d{4}$/, { message: "PG batch must be a valid year (e.g., 2020)" })
//     .optional(),
//   PGCGPA: z
//     .number()
//     .min(0, { message: "PG CGPA cannot be less than 0" })
//     .max(10, { message: "PG CGPA cannot exceed 10" })
//     .optional(),
//   pgActiveBacks: z.number().min(0, { message: "Active backs must be at least 0" }).optional(),
//   pgTotalBacks: z.number().min(0, { message: "Total backs must be at least 0" }).optional(),

//   hscBoard: z.string().min(2, { message: "HSC board must be at least 2 characters" }),
//   hscYear: z
//     .string()
//     .regex(/^\d{4}$/, { message: "HSC year must be a valid year (e.g., 2018)" }),
//   hscPercentage: z
//     .number()
//     .min(0, { message: "HSC percentage must be at least 0" })
//     .max(100, { message: "HSC percentage cannot exceed 100" }),

//   ssBoard: z.string().min(2, { message: "SS board must be at least 2 characters" }),
//   ssYear: z
//     .string()
//     .regex(/^\d{4}$/, { message: "SS year must be a valid year (e.g., 2016)" }),
//   ssPercentage: z
//     .number()
//     .min(0, { message: "SS percentage must be at least 0" })
//     .max(100, { message: "SS percentage cannot exceed 100" }),
// });


// export const AcademicInfoSchema = z.object({
//   degree: z.enum(["btech", "mtech"], {
//     errorMap: () => ({ message: "Please select a valid degree" }),
//   }),
//   branch: z.enum(["CSE", "IT", "ECE", "EE", "CE", "ME", "IP"], {
//     errorMap: () => ({ message: "Please select a valid branch" }),
//   }),
//   batch: z.enum(["2025", "2026", "2027"], {
//     errorMap: () => ({ message: "Please select a valid batch year" }),
//   }),
//   CGPA: z
//     .string()
//     .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid CGPA format" }),
//   activeBacks: z
//     .string()
//     .regex(/^\d+$/, { message: "Active backs must be a number" }),
//   totalBacks: z
//     .string()
//     .regex(/^\d+$/, { message: "Total backs must be a number" }),
//   hscBoard: z.string().min(3, { message: "Please enter a valid HSC board" }),
//   hscYear: z
//     .string()
//     .regex(/^\d{4}$/, { message: "Year must be in YYYY format" }),
//   hscPercentage: z
//     .string()
//     .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid percentage format" }),
//   ssBoard: z.string().min(3, { message: "Please enter a valid SS board" }),
//   ssYear: z
//     .string()
//     .regex(/^\d{4}$/, { message: "Year must be in YYYY format" }),
//   ssPercentage: z
//     .string()
//     .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid percentage format" }),
// });





export const AcademicInfoSchema = z.object({
  ssPercentage: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "SS Percentage must be a valid decimal number" })
    .transform((val) => parseFloat(val))
    .refine((val) => val >= 10, { message: "SS Percentage must be at least 0" })
    .refine((val) => val <= 100, { message: "SS Percentage must be at most 100" }),
  ssYear: z
    .string()
    .regex(/^\d{4}$/, { message: "SS Year must be a valid 4-digit year" }),
  ssBoard: z.string().min(1, { message: "SS Board is required" }),
  hscPercentage: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "HSC Percentage must be a valid decimal number" })
    .transform((val) => parseFloat(val))
    .refine((val) => val >= 10, { message: "HSC Percentage must be at least 10" })
    .refine((val) => val <= 100, { message: "HSC Percentage must be at most 100" }),
  hscYear: z
    .string()
    .regex(/^\d{4}$/, { message: "HSC Year must be a valid 4-digit year" }),
  hscBoard: z.string().min(1, { message: "HSC Board is required" }),
  pgTotalBacks: z
    .string()
    .regex(/^\d+$/, { message: "PG Total Backs must be a valid number" })
    .optional(),
  pgActiveBacks: z
    .string()
    .regex(/^\d+$/, { message: "PG Active Backs must be a valid number" })
    .optional(),
  PGCGPA: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "PG CGPA must be a valid decimal number" })
    .transform((val) => parseFloat(val))
    .refine((val) => val >= 0, { message: "PG CGPA must be at least 0" })
    .refine((val) => val <= 10, { message: "PG CGPA must be at most 10" })
    .optional(),
  pgBatch: z.enum(["2025", "2026", "2027"], {
      errorMap: () => ({ message: "Please select a valid PG batch" }),
    }).optional(),
  pgBranch: z
    .enum(["CSE", "IT", "ECE", "EE", "CE", "ME", "IP"], {
      errorMap: () => ({ message: "Please select a valid PG branch" }),
    })
    .optional(),
  pgDegree: z.enum(["mtech"], {
      errorMap: () => ({ message: "Please select a valid PG degree" }),
    }).optional(),
  ugTotalBacks: z
    .string()
    .regex(/^\d+$/, { message: "Total Backs must be a valid number" }),
  ugActiveBacks: z
    .string()
    .regex(/^\d+$/, { message: "Active Backs must be a valid number" }),
  UGCGPA: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "UG CGPA must be a valid decimal number" })
    .transform((val) => parseFloat(val))
    .refine((val) => val >= 0, { message: "UG CGPA must be at least 0" })
    .refine((val) => val <= 10, { message: "UG CGPA must be at most 10" }),
  ugBatch: z.enum(["2025", "2026", "2027"], {
      errorMap: () => ({ message: "Please select a valid UG batch" }),
    }),
  ugBranch: z.enum(["CSE", "IT", "ECE", "EE", "CE", "ME", "IP"], {
      errorMap: () => ({ message: "Please select a valid UG branch" }),
    }),
  ugDegree: z.enum(["btech"], {
    errorMap: () => ({ message: "Please select a valid UG degree" }),
  }),
  
  
  
  
  

  
  
  
  
  
  



  
});


export const AdditionalInfoSchema = z.object({
  iAgree: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree to the Code of Conduct and Privacy Policy",
    }),
  linkedinProfile: z
    .string()
    .url({ message: "Please enter a valid URL for your LinkedIn profile" })
    .optional(),
  resumeUrl: z
    .string()
    .url({ message: "Please enter a valid URL for your resume" })
    .nonempty({ message: "Resume URL is required" }),
  
});
