import dynamic from "next/dynamic";

const SampleComponent = dynamic(() => import("next2/sampleComponent"), {
  ssr: false,
  loading({ error }) {
    if (error) {
      return <p>That failed.</p>;
    }

    return <p>Loading...</p>;
  }
});

export default function IndexPage() {
  return (
    <div>
      <h1>This is the host application</h1>
      <SampleComponent />
    </div>
  );
}
