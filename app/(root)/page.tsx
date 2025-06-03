'use client'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <>
    <Button  onClick={() => {
      alert('Hey You!! Karibu Nyumbani')
    }} variant='outline' size='lg'>
      Welcome Home
    </Button>
   </>
  );
}
