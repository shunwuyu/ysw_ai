import type { CommonComponentProps } from '../../interface';
import {
  useComponentsStore  
} from '../../stores/components'
import {
  useComponentConfigStore
} from '../../stores/component-config';
import {
  useMaterialDrop
} from '../../hooks/useMaterialDrop';

function Page({id, name, children}: CommonComponentProps) {
  const { addComponent } = useComponentsStore();
  const { componentConfig } = useComponentConfigStore();
  const { canDrop, drop } = useMaterialDrop(['Button', 'Container'], id);
  console.log(drop, '//////////')
  return (
    <div 
      ref={drop}
      className="p-[20px] h-[100%] box-border">
      {children}
    </div>
  )
}
export default Page;