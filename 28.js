function normalizeAuthorName(string) {
  let lowerString = string.toLowerCase().trim();
  if (lowerString.includes("(contributor)")) {
    lowerString = lowerString.replace("(contributor)", "").trim();
  }
  const arr = lowerString.split(" ");
  const firstName = arr[0].toString();
  const lastName = arr[1].toString();

  const newFirst = firstName[0].toUpperCase() + firstName.slice(1);
  const newLast = lastName[0].toUpperCase() + lastName.slice(1);

  return `${newFirst} ${newLast}`;
}

console.log(normalizeAuthorName("  JuliE sussMan (Contributor)"));

function logBookTheme(title) {
  title = title.toLowerCase();

  if (title.startsWith("computer")) {
    console.log("This book is about computers");
  } else if (title.includes("algorithms") && title.includes("structures")) {
    console.log("This book is about algorithms and data structures");
  } else if (
    (title.endsWith("system") || title.endsWith("systems")) &&
    !title.includes("operating")
  ) {
    console.log(
      "This book is about some systems, but definitely not about operating systems"
    );
  }
}
