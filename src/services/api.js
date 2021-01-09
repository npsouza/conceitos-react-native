import axios from "axios";
import AxiosMock from "axios-mock-adapter";

const api = axios.create({
  baseURL: "http://localhost:3333",
});


const apiMock = new AxiosMock(api);

apiMock.onGet("repositories").reply(200, [
  {
    id: "3333",
    title: "Desafio React Native",
    url: "https://github.com/josepholiveira",
    techs: ["React Native", "Node.js"],
    likes: 0,
  },
]);

apiMock
.onPost(/repositories\/.*\/likes/)
.reply(200, {
  id: "3333",
  title: "Desafio React Native",
  url: "https://github.com/josepholiveira",
  techs: ["React Native", "Node.js"],
  likes: 1,
});

export default api;


