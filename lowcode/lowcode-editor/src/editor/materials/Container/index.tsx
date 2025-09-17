import type { CommonComponentProps} from "../../interface";
import {
  useComponentsStore
} from '../../stores/components';
import {
  useComponentConfigStore
} from '../../stores/component-config';
import {
  useMaterialDrop
} from '../../hooks/useMaterialDrop';

const Container = ({ children, id, name }:CommonComponentProps) => {
  const { addComponent } = useComponentsStore();
  const { componentConfig } = useComponentConfigStore();
  const { canDrop, drop } = useMaterialDrop(['Button', 'Container'], id);
  return (
    <div 
    ref={drop}
    className="border-[1px] border-[#000] min-h-[100px] p-[20px]">
    {children}
    </div>
  )
}

export default Container;