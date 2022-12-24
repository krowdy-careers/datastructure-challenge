import { writeFile } from "fs/promises";

export function writeDataAsync(path, data) {
  writeFile(path, data)
    .then((m) => console.log(m))
    .catch((err) => console.log(err));
}
