// @flow
import * as React from "react";
export const ItemForm = ({ handleChange }: { handleChange: Function }) => (
  <div>
    <div className="field">
      <div className="label">Image</div>
      <div className="control">
        <input
          name="image"
          type="text"
          className="input"
          placeholder="Add some cool image url here..."
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="field">
      <div className="label">Title</div>
      <div className="control">
        <input
          name="title"
          type="text"
          className="input"
          placeholder="Think of some nice title..."
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="field">
      <div className="label">Subtitle</div>
      <div className="control">
        <input
          name="subtitle"
          type="text"
          className="input"
          placeholder="Optional subtitle or short description..."
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="field">
      <div className="label">Description</div>
      <div className="control">
        <textarea
          name="description"
          className="textarea"
          placeholder="Add descriptive description..."
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="level">
      <div className="level-left">
        <label className="checkbox" htmlFor="submit">
          <input type="checkbox" id="submit" checked readOnly />
          &nbsp;By submitting this form you agree with everything we say.
        </label>
      </div>
      <div className="level-right">
        <div className="level-item">
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
);
