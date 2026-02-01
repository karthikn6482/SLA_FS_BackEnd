import ThemeToggle from "./components/theme/ThemeToggle";
import CounterIncrement from "./components/counter/CounterIncrement";
import CounterDisplay from "./components/counter/CounterDisplay";
import FocusInput from "./components/focus/FocusInput";
import FocusButton from "./components/focus/FocusButton";
import Login from "./components/auth/Login";
import Profile from "./components/auth/Profile";
import RenderTracker from "./components/render/RenderTracker";

import PreviousValue from "./components/useref/PreviousValue";
import NoRerenderCounter from "./components/useref/NoRerenderCounter";
import FocusAfterUpdate from "./components/useref/FocusAfterUpdate";
import RenderVsState from "./components/useref/RenderVsState";
import TimerNoRerender from "./components/useref/TimerNoRerender";

import PrevFormValue from "./components/forms/PrevFormValue";
import AutoFocusForm from "./components/forms/AutoFocusForm";
import RenderCountForm from "./components/forms/RenderCountForm";
import PreventMultiSubmit from "./components/forms/PreventMultiSubmit";
import TimerSubmitForm from "./components/forms/TimerSubmitForm";
import PrevCompareForm from "./components/forms/PrevCompareForm";
import ScrollToError from "./components/forms/ScrollToError";

function App() {
  return (
    <>
      <ThemeToggle />
      <CounterIncrement />
      <CounterDisplay />

      <FocusInput />
      <FocusButton />

      <Login />
      <Profile />

      <RenderTracker />

      <PreviousValue />
      <NoRerenderCounter />
      <FocusAfterUpdate />
      <RenderVsState />
      <TimerNoRerender />

      <PrevFormValue />
      <AutoFocusForm />
      <RenderCountForm />
      <PreventMultiSubmit />
      <TimerSubmitForm />
      <PrevCompareForm />
      <ScrollToError />
    </>
  );
}

export default App;
