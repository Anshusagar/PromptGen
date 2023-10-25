import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import {connectToDatabase} from '@utils/database'
import User from "@models/user"


const handler =NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks:{
        async session({session}){
            const sessionUser = await User.findOne({email:session.user.email});
    
            session.user.id=sessionUser.id.toString();
            return session;
        },
        async signIn({profile}){
            try {
                await connectToDatabase();
    
                const userExists = await User.findOne({email: profile.email});
                //alert(userExists)
                console.log(profile)
            if(!userExists){
                await User.create({email: profile.email ,username: profile.name,image: profile.picture});
            }
                return true;
    
            } catch (error) {
                console.log("Sign error: " + error)
                return false;
            }
        }
    }
});

export {handler as GET,handler as POST};