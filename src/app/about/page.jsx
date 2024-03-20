
async function takeTime(){
await new Promise((resolve) => {
setTimeout(resolve, 3000);
});
}
export default async function AboutPage(){
  await takeTime();
  throw new Error("This is Manual Error");
  return(
    <div>
            <h1>About us Page</h1>
    </div>
  );
}
