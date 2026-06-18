export default function Home() {
  const deploymentEnv =
    process.env.NEXT_PUBLIC_DEPLOYMENT_ENV ?? "unknown environment";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Hello World
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Deployed on {deploymentEnv}
        </p>
      </div>
    </main>
  );
}
