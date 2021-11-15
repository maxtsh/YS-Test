export function getHeaderName(path: string): string {
  let name = "Header";
  switch (path) {
    case "/":
      name = "Dashboard";
      break;

    case "/users":
      name = "Users";
      break;

    case "/apps":
      name = "Applications";
      break;

    default:
      return name;
  }
  return name;
}
