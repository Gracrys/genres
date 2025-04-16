
<script lang="ts">
    import { Handle, Position, type NodeProps } from '@xyflow/svelte';
   
    type $$Props = NodeProps;
    export let data: $$Props['data'];
    export let isConnectable: $$Props['isConnectable'];
   
    const { label } = data;
  </script>
    <Handle type="target" position={Position.Top}   style=" background: transparent; border: none" {isConnectable} />
  <figure class="bg-teal-900 shadow-lg shadow-teal-900/50 rounded p-1.5 py-0.5 ">
    <Handle
    type="source"
    position={Position.Bottom}
    id="a"
    style=" background: transparent; border: none"
    {isConnectable}
  />
  <span >
    {label}
  </span>
</figure>