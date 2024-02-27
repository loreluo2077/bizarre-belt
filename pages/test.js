import Alert from "../components/ale";

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Alert type=''>This is an important message</Alert>
      <Alert type='warning'>This is an important message</Alert>
    </div>
  );
}
