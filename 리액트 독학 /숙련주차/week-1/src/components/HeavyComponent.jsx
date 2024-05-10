import React, { useState, useMemo } from 'react'

function HeavyComponent() {

    const [count, setCount] = useState(0);

    const heavyWork = () => {
        for (let index = 0; index < 1000000000; index++) {
        }
        return 100;
    }

    const value = useMemo(() => heavyWork(), []);
    console.log(`value는 ${value} 입니다.`);

  return (
    <div>
        <p>나는 엄청 무거운 컴포넌트야!</p>
        <button onClick={() => {
            setCount(count + 1)
        }}> 누르면 아래 count가 올라가요!</button>
        {count}
    </div>
  )
}

export default HeavyComponent