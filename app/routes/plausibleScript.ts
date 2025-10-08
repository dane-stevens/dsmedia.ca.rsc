
export async function loader() {
  const response = await fetch('https://plausible.io/js/script.js');
  const script = await response.text();
  const { status, headers } = response;

  return new Response(script, {
    status,
    headers,
  });

}

