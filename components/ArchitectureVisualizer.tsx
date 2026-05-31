"use client";

import { useMemo, useState } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { architectureArtifacts } from "@/data/architectureArtifacts";
import { cn } from "@/lib/utils";

type ArchitectureVisualizerProps = {
  data: typeof architectureArtifacts;
};

type ArchitectureNodeData = {
  label: string;
  type?: string;
  active: boolean;
};

function ArchitectureNode({ data }: NodeProps<Node<ArchitectureNodeData>>) {
  return (
    <div
      className={cn(
        "min-w-36 rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-center shadow-line transition",
        data.active && "border-brass bg-white shadow-soft"
      )}
    >
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-river">
        {data.type ?? "node"}
      </p>
      <p className="mt-1 font-bold text-ink">{data.label}</p>
    </div>
  );
}

const nodeTypes = { architectureNode: ArchitectureNode };

const positions = [
  { x: 0, y: 180 },
  { x: 240, y: 180 },
  { x: 480, y: 180 },
  { x: 720, y: 40 },
  { x: 720, y: 180 },
  { x: 720, y: 320 },
  { x: 960, y: 80 },
  { x: 960, y: 280 },
  { x: 1180, y: 180 }
];

export function ArchitectureVisualizer({ data }: ArchitectureVisualizerProps) {
  const [activeId, setActiveId] = useState<string>(data[0]?.id ?? "");
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const artifact = data.find((item) => item.id === activeId) ?? data[0];

  const nodes = useMemo<Node<ArchitectureNodeData>[]>(
    () =>
      artifact.nodes.map((node, index) => ({
        id: node.id,
        type: "architectureNode",
        position: positions[index] ?? { x: index * 180, y: 160 },
        data: {
          label: node.label,
          type: "type" in node ? node.type : undefined,
          active: activeNode === node.id
        }
      })),
    [activeNode, artifact.nodes]
  );

  const edges = useMemo<Edge[]>(
    () =>
      artifact.edges.map(([source, target]) => {
        const highlighted =
          activeNode === source || activeNode === target || activeNode === null;
        return {
          id: `${source}-${target}`,
          source,
          target,
          animated: highlighted,
          style: {
            stroke: highlighted ? "#b99556" : "rgba(18,20,23,0.16)",
            strokeWidth: highlighted ? 2.2 : 1
          }
        };
      }),
    [activeNode, artifact.edges]
  );

  return (
    <section className="section-shell">
      <div className="mb-8 max-w-3xl">
        <p className="kicker">Architecture Visualizer</p>
        <h2 className="display mt-3 text-4xl leading-tight sm:text-6xl">
          Architecture becomes product strategy when it creates leverage.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <div className="space-y-3">
          {data.map((item) => (
            <button
              className={`w-full rounded-2xl border p-4 text-left transition ${
                activeId === item.id
                  ? "border-river bg-river text-paper"
                  : "border-ink/10 bg-white/50 hover:border-river/50"
              }`}
              key={item.id}
              onClick={() => {
                setActiveId(item.id);
                setActiveNode(null);
              }}
            >
              <p className="font-bold">{item.title}</p>
              <p className="mt-2 text-sm leading-6 opacity-70">
                {item.description}
              </p>
            </button>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <div className="flow-grid h-[560px] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/48 shadow-line">
            <ReactFlow
              edges={edges}
              fitView
              maxZoom={1.3}
              minZoom={0.45}
              nodeTypes={nodeTypes}
              nodes={nodes}
              onNodeClick={(_, node) => setActiveNode(node.id)}
              onPaneClick={() => setActiveNode(null)}
            >
              <Background gap={30} />
              <Controls showInteractive={false} />
            </ReactFlow>
          </div>

          <aside className="rounded-[1.5rem] border border-ink/10 bg-white/58 p-5 shadow-line">
            <p className="kicker">Information Panel</p>
            <h3 className="display mt-3 text-3xl">
              {activeNode
                ? artifact.nodes.find((node) => node.id === activeNode)?.label
                : artifact.title}
            </h3>
            <p className="mt-4 leading-7 text-ink/70">{artifact.description}</p>
            {"metrics" in artifact && (
              <div className="mt-6 space-y-3">
                {Object.entries(artifact.metrics).map(([key, value]) => (
                  <div
                    className="rounded-2xl border border-ink/10 bg-paper p-4"
                    key={key}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/45">
                      {key}
                    </p>
                    <p className="display mt-1 text-3xl">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
