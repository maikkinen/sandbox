import { serve } from "https://deno.land/std@0.77.0/http/server.ts"; //https://deno.land/std@0.65.0/http/server.ts";

const server = serve({ port: 8000 });
console.log("Server running at:  http://localhost:8000/");

for await (const request of server) {
    request.respond({
        body: await Deno.readTextFile('data.json'),
        headers: new Headers({
            "Content-Type": "application/json",
        })
    });
}