import React, { useReducer, useMemo, useCallback } from 'react';
import { reducer, initialState } from './reducer';
import { increment, decrement } from './actionCreators';

type Props = {
  countLabel: string;
  onClickIncrement: () => void;
  onClickDecrement: () => void;
};

const Component: React.FC<Props> = props => {
  return (
    <>
      Count: {props.countLabel}
      <button onClick={props.onClickIncrement}>+</button>
      <button onClick={props.onClickDecrement}>-</button>
    </>
  );
};

const Container: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState({ count: 0 }));
  const countLabel = useMemo(() => `${state.count} ${state.unit}`, [state]);
  const onClickIncrement = useCallback(() => dispatch(increment()), []);
  const onClickDecrement = useCallback(() => dispatch(decrement()), []);
  return (
    <Component
      countLabel={countLabel}
      onClickIncrement={onClickIncrement}
      onClickDecrement={onClickDecrement}
    />
  );
};
export default Container;

//children ファクトリ関数 useRef

//   const ref = useRef<null | HTMLDivElement>(null);
//   useEffect(() => {
//     if (ref.current === null) return;
//     const size = ref.current.getBoundingClientRect();
//     console.log(size);
//   });
//   return (
//     <div>
//       <div ref={ref} style={{ width: 100, height: 1000 }} />
//     </div>
//   );
// };
