const template = `
<div class="kanban">
  <slot name="note"></slot>
  <slot name="os"></slot>
</div>
`;
export default {
  name: "BaseKanban",
  template
};