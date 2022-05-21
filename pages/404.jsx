import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from "react";

const Error = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])
  
  return (
    <div>
        Ошибка, несуществующий адресс
    </div>
  )
}

export default Error