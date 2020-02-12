import React from "react";

export default function NewLogForm(props) {
  return (
    <div>
      <a href="alllogs">
        <img />
      </a>

      <form
        class=" form border-top border-bottom border-primary"
        id="form-addNew"
        action="addNew"
        method="post"
      >
        <div class=" form-group">
          <label for="priority">How do you feel?</label>
          <select
            class="form-control text-right"
            id="feeling"
            name="feeling"
            placeholder="Enter how do you feel"
          >
            <option>Happy</option>
            <option>Sad</option>
            <option>Tired</option>
            <option>Relaxed</option>
            <option>Sleepy</option>
          </select>
        </div>
        <div class="form-group">
          <label for="priority">How may hours did you sleep?</label>
          <select
            class="form-control"
            id="sleep"
            name="sleep"
            placeholder="Enter hours of sleep"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
          </select>
        </div>

        <div class="form-group">
          <label for="priority">How's the weather'?</label>
          <select
            class="form-control"
            id="sleep"
            name="weather"
            placeholder="Enter hours of sleep"
          >
            <option value="sunny">☀️</option>
            <option value="partly sunny">🌤</option>
            <option value="cloudy">☁️</option>
            <option value="rainy">🌧</option>
            <option value="snowy">❄️</option>
          </select>
        </div>
      </form>

      <button
        type="submit"
        class="btn btn-primary center-block"
        onClick={() => props.submitNew()}
      >
        <span class="badge badge-primary badge-pill">add new</span>
      </button>
    </div>
  );
}
