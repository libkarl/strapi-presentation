import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function CounterUp({ count, time }: any) {
  return (
    <>
      {/* <CountUp end={count} duration={3}/>  */}
      <CountUp end={count} duration={time}>
        {({ countUpRef, start }: any) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef}>count</span>
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
}
