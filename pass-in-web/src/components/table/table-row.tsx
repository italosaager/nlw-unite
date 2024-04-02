import { ComponentProps } from "react";

interface TableRow extends ComponentProps<'tr'>{

}

export function TableRow(props: TableRow) {
 return (
    <tr {...props} className='border-b border-white/10 hover:bg-white/5' />
 );
}