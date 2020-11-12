import { serve } from "https://deno.land/std@0.77.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("Server running at:  http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello Gorgeous! 🥂😘\n" });
}

// Serve deno?
// deno run (--allow-net) filename.ts
// Deno is not too verbose;
// For your own mental health, 
// console.log stuff to indicate that it is alive! :) 