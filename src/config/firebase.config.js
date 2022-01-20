import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyBvOsaATIFUem5DXUqvPQap34OSuV2h9wM",
	authDomain: "scribby-1.firebaseapp.com",
	projectId: "scribby-1",
	storageBucket: "scribby-1.appspot.com",
	messagingSenderId: "479437121254",
	appId: "1:479437121254:web:5a51a0500d38f785c2bd27",
	measurementId: "G-NYLTBRN6MY"
};

if (!getApps.length) {
	initializeApp(firebaseConfig);
	if (typeof window !== "undefined") {
		if ("measurementId" in firebaseConfig) {
			getAnalytics();
		}
	}
}
