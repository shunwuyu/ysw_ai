import React, {
  useEffect
} from 'react';
import { type Component, useComponentsStore } from '../../stores/components';
import { useComponentConfigStore } from '../../stores/component-config';

export  function EditArea() {
  const { components, addComponent, deleteComponent } = useComponentsStore();
  const { componentConfig } = useComponentConfigStore();
  // useEffect(() => {
  //   addComponent({
  //     id: 222,
  //     name: 'Container',
  //     props: {},
  //     children: []
  //   }, 1);
  //    addComponent({
  //     id: 333,
  //     name: 'Button',
  //     props: {},
  //     children: []
  //   }, 222)
  //   // setTimeout(() => {
  //   //   deleteComponent(333);
  //   // }, 3000)
  // }, [])

  function renderComponents(components: Component[]):React.ReactNode {
    return components.map((component: Component)=>{
      const config = componentConfig?.[component.name];
      if (!config?.component) {
        return null;
      }
      return React.createElement(
        config.component,
        {
          key: component.id,
          id: component.id,
          ...config.defaultProps,
          ...component.props
        },
        renderComponents(component.children || [])
      )
    })
  }

  return (
    <>
      {/* <pre>
        {JSON.stringify(components, null, 2)}
      </pre> */}
      {renderComponents(components)}
    </>
  )
}