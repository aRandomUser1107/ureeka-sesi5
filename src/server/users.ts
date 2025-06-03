"use server";

export interface User {
    id: number; 
    name: string;
}

export const createUser = async (user: User) => {
   console.log("Creating user:", user);
}