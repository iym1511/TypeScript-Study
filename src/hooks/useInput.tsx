import { ChangeEvent, useCallback, useState } from "react"

// 아래 타입을 interface로 했을때 인데 0,1이 배열 순서를 뜻함
// export interface UseInputReturnType {
//     0: string | null;
//     1: (e: ChangeEvent<HTMLInputElement>) => void;
//   }

export type UseInputReturnType = [string | null, (e: ChangeEvent<HTMLInputElement>) => void];

export default (initialValue:string | null = null): UseInputReturnType => {
    const [value, setValue] = useState<string | null>(initialValue);
    const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    },[]) 
    console.log(value);
    return [value, handler]
}

