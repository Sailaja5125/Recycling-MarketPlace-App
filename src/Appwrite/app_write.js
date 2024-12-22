import { Client, Account, ID } from "appwrite";

// Configuration settings for Appwrite
const conf = {
    appwriteUrl: process.env.NEXT_PUBLIC_APPWRITE_URL || "https://cloud.appwrite.io/v1",
    appwriteProjectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "675e83bb000da065fae8",
};

// Initializing the Appwrite client
const appwriteClient = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

// Creating an instance of the Account service
export const account = new Account(appwriteClient);


class AppwriteService {
    // Method to create a user account
    async createUserAccount({ email, password, name }) {
        try {
            const userAccount = await account.create(ID.unique(), email, password, name);
            return userAccount; // Directly return the created user account
        } catch (error) {
            throw error; // Rethrow error for handling in calling function
        }
    }

    // Method to log in a user account
    async loginUserAccount({ email, password }) {
        try {
            return await account.createEmailSession(email, password);
        } catch (error) {
            throw error; // Rethrow error for handling in calling function
        }
    }

    // Method to check if a user is logged in
    async isLoggedin() {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data); // Return true if user data exists
        } catch (error) {
            console.error("Error checking login status:", error);
            return false; // Return false if an error occurs
        }
    }

    // Method to log out the current user
    async logout() {
        try {
            return await account.deleteSession("current");
        } catch (error) {
            throw error; // Rethrow error for handling in calling function
        }
    }

    // Method to get the current user's information
    async getCurrentUser() {
        try {
            return await account.get();
        } catch (error) {
            console.error("Error fetching current user:", error);
            throw error; // Rethrow error for handling in calling function
        }
    }
}

// Exporting an instance of AppwriteService for use in other parts of the application
export const appwriteService = new AppwriteService();
