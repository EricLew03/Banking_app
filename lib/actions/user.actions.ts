'use server'

import { Account, ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parse } from "path";


export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);

    // (await cookies()).set("appwrite-session", session.secret, {
    //   path: "/",
    //   httpOnly: true,
    //   sameSite: "strict",
    //   secure: true,
    // });

    // const user = await getUserInfo({ userId: session.userId }) 

    return parseStringify(session);
  } catch (error) {
    console.error('Error', error);
  }
}


export const signUp = async ({ password, ...userData }: SignUpParams) => {
  const { email, firstName, lastName } = userData;

  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    if (!newUserAccount) throw new Error("Error creating user");

    const session = await account.createEmailPasswordSession(email, password);

    // ✅ Set session ID, not secret
    (await cookies()).set("appwrite-session", session.secret ,{
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw error;
  }
};


export const logoutAccount = async() => {
  try{
    const {account} = await createSessionClient();
    (await cookies()).delete('appwrite-session');

    await account.deleteSession('current');
  } catch (error) {
    return null;
  }
}


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const result = await account.get();



    return parseStringify(result);
  } catch (error) {
    console.log(error)
    return null;
  }
}
