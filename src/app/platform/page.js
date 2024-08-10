import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("@/components/common/MapComponent"), {
  ssr: false,
});
import Image from "next/image";

export default function Page() {
  return (
    <>
      <MapComponent />
    </>
  );
}
