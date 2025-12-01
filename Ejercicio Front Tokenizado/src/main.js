import { tokenLoggin } from "./apiFetch/api";
import "./style.css";
import { startLoginPage } from "./utils/functions";

const token = localStorage.getItem("token");
if (token) {
  tokenLoggin(token)
} else {
  startLoginPage();
}
