"use server";
import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
      include: {
        academicInfo: true,
      },
    });
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    console.log("error-----------", error);
    return null;
  }
};

export const getUserByUsername = async (userName: string) => {
  try {
    const user = await db.user.findUnique({
      where: { userName },
    });
    return user;
  } catch (error) {
    console.log("error-----------", error);
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.log("error-----------", error);
    return null;
  }
};

export const getUserAcademicInfo = async (userName: string) => {
  try {
    const user = await db.AcademicInfo.findUnique({
      where: { userName },
    });
    return user;
  } catch (error) {
    console.log("error-----------", error);
    return null;
  }
};

export const getUserAdditionalInfo = async (userName: string) => {
  try {
    const user = await db.AdditionalInfo.findUnique({
      where: { userName },
    });
    return user;
  } catch (error) {
    console.log("error-----------", error);
    return null;
  }
};
