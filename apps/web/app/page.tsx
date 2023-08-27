import Clientside from "./Clientside";
import { trpc } from "./trpc";

export default async function Home() {
  const test = await trpc.hotel.test.query();
  const b = await trpc.device.deviceRoute.query();
  return (
    <div>
      {test}
      <br />

      {b}
      <Clientside />
    </div>
  );
}
