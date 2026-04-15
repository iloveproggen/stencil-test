import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  /**
   * Name parts
   */
  @Prop() first?: string;
  @Prop() middle?: string;
  @Prop() last?: string;

  /**
   * UI config
   */
  @Prop() cardTitle: string = 'Welcome Card';
  @Prop() theme: 'light' | 'dark' = 'light';

  /**
   * Internal state
   */
  @State() isExpanded: boolean = false;
  @State() customMessage: string = '';

  /**
   * Event emitted when user clicks button
   */
  @Event() action: EventEmitter<string>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private toggle = () => {
    this.isExpanded = !this.isExpanded;
  };

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.customMessage = input.value;
  };

  private emitAction = () => {
    this.action.emit(`User clicked button: ${this.getText()}`);
  };

  render() {
    return (
      <div class={`card ${this.theme}`}>

        <h2>{this.cardTitle}</h2>

        <p class="name">
          Hello 👋 I'm <strong>{this.getText()}</strong>
        </p>

        <button onClick={this.toggle}>
          {this.isExpanded ? 'Hide details' : 'Show details'}
        </button>

        {this.isExpanded && (
          <div class="details">

            <input
              type="text"
              placeholder="Type a message..."
              onInput={this.handleInput}
            />

            <p class="message">
              {this.customMessage || 'No message yet'}
            </p>

            <button onClick={this.emitAction}>
              Trigger Event
            </button>

          </div>
        )}

      </div>
    );
  }
}