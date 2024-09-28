"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_sdk_1 = __importDefault(require("@jowamus/typescript-sdk"));
const client = new typescript_sdk_1.default({
    apikey: "123",
});
client.getPostById(1).then((p) => {
    console.log(p);
});
