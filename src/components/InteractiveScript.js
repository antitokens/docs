import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const Collider = () => {
  const [proPortion, setProPortion] = useState(60);
  const [totalTokens, setTotalTokens] = useState(100);
  const [isMobile, setIsMobile] = useState(false);

  const antiPortion = totalTokens - proPortion;
  const difference = Math.abs(proPortion - antiPortion);
  const sum = totalTokens;

  // Calculate mean
  const mean = sum < 1 ? 0 : difference;

  // Calculate standard deviation
  let sigma;
  if (sum < 1 || difference === sum) {
    sigma = 0;
  } else if (sum === 0 || difference === sum) {
    sigma = sum;
  } else {
    sigma = sum / difference;
  }
  const variance = sigma * sigma;

  const generateDistributionPoints = () => {
    const points = [];
    const std = Math.sqrt(variance);
    let maxY = 0;

    for (let x = 0; x <= 100; x += 2) {
      const y =
        (1 / (std * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * Math.pow((x - mean) / std, 2));
      maxY = Math.max(maxY, y);
    }

    for (let x = 0; x <= 100; x += 2) {
      const y =
        (1 / (std * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * Math.pow((x - mean) / std, 2));
      points.push({ x, y: y / maxY });
    }
    return points;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-2xl p-4 border rounded-lg">
      <div className="mb-2">
        <h2 className="text-xl font-bold mb-4 text-center">
          Collider Visualiser
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Total Tokens:{" "}
            <span className="font-sfmono mr-2 p-1 bg-dark rounded-md">
              {totalTokens}
            </span>
          </label>
          <input
            type="range"
            value={totalTokens}
            min={10}
            max={200}
            step={10}
            onChange={(e) => setTotalTokens(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            <span className="text-accent-secondary">$PRO:</span>{" "}
            <span className="font-sfmono mr-2 p-1 bg-dark rounded-md">
              {proPortion}
            </span>{" "}
            |<span className="text-accent-primary ml-2">$ANTI:</span>{" "}
            <span className="font-sfmono p-1 bg-dark rounded-md">
              {totalTokens - proPortion}
            </span>
          </label>
          <input
            type="range"
            value={proPortion}
            min={0}
            max={totalTokens}
            step={1}
            onChange={(e) => setProPortion(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="lg:text-sm text-xs flex flex-row w-full justify-between items-center mb-2">
          <div className="flex flex-col items-start">
            <p>
              Mean (μ){" "}
              <span className="text-gray-400">(Prediction Strength)</span>:{" "}
              <span className="font-sfmono p-1 bg-dark rounded-md">
                {mean.toFixed(2)}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p>
              Variance (σ<sup>2</sup>){" "}
              <span className="text-gray-400">(Uncertainty)</span>:{" "}
              <span className="font-sfmono p-1 bg-dark rounded-md">
                {variance.toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        <div className="h-64 mt-4 -mb-24 lg:-mb-16">
          <AreaChart
            width={isMobile ? 400 : 600}
            height={isMobile ? 175 : 200}
            data={generateDistributionPoints()}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeArray="3 3" stroke="#ccc" strokeWidth={0.25} />
            <XAxis
              dataKey="x"
              tick={{ fontSize: 12, fontFamily: "SF Mono Round", fill: "#ccc" }}
              axisLine={{ stroke: "#ccc" }}
              tickLine={{ stroke: "#ccc" }}
            />
            <YAxis
              tick={{ fontSize: 12, fontFamily: "SF Mono Round", fill: "#ccc" }}
              axisLine={{ stroke: "#ccc" }}
              tickLine={{ stroke: "#ccc" }}
            />
            <Area
              type="monotone"
              dataKey="y"
              stroke="#ffffff"
              fill="#c4c4c4"
              fillOpacity={0.25}
              strokeWidth={1.0}
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export const Equaliser = () => {
  const [proPortion, setProPortion] = useState(60);
  const [totalTokens, setTotalTokens] = useState(100);
  const [isMobile, setIsMobile] = useState(false);
  const [tMean, setTMean] = useState(50);
  const [tVariance, setTVariance] = useState(10);

  const antiPortion = totalTokens - proPortion;
  const difference = Math.abs(proPortion - antiPortion);
  const sum = totalTokens;
  let sigma;
  if (sum < 1 || difference === sum) {
    sigma = 0;
  } else if (sum === 0 || difference === sum) {
    sigma = sum;
  } else {
    sigma = sum / difference;
  }
  const mean = sum < 1 ? 0 : difference;
  const variance = sigma * sigma;

  const calculateOverlap = (primary, secondary) => {
    let overlap = 0;
    for (let i = 0; i < primary.length; i++) {
      overlap += Math.min(primary[i].y, secondary[i].y) * 2; // Multiply by step size (2)
    }
    return overlap.toFixed(4); // Return area with 4 decimal places
  };

  // Generate the primary distribution points
  const generatePrimaryDistributionPoints = () => {
    const points = [];
    const std = Math.sqrt(variance);
    let maxY = 0;

    for (let x = 0; x <= 100; x += 2) {
      const y =
        (1 / (std * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * Math.pow((x - mean) / std, 2));
      maxY = Math.max(maxY, y);
    }

    for (let x = 0; x <= 100; x += 2) {
      const y =
        (1 / (std * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * Math.pow((x - mean) / std, 2));
      points.push({ x, y: y / maxY });
    }
    return points;
  };

  // Generate the secondary distribution points (tMean, tVariance)
  const generateSecondaryDistributionPoints = () => {
    const points = [];
    const std = Math.sqrt(tVariance);
    let maxY = 0;

    for (let x = 0; x <= 100; x += 2) {
      const y =
        (1 / (std * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * Math.pow((x - tMean) / std, 2));
      maxY = Math.max(maxY, y);
    }

    for (let x = 0; x <= 100; x += 2) {
      const y =
        (1 / (std * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * Math.pow((x - tMean) / std, 2));
      points.push({ x, y: y / maxY });
    }
    return points;
  };

  const userData = generatePrimaryDistributionPoints();
  const truthData = generateSecondaryDistributionPoints();
  const overlap = calculateOverlap(userData, truthData);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-2xl p-4 border rounded-lg">
      <div className="mb-2">
        <h2 className="text-xl font-bold mb-4 text-center">
          Collider Visualiser
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Total Tokens:{" "}
            <span className="font-sfmono mr-2 p-1 bg-dark rounded-md">
              {totalTokens}
            </span>
          </label>
          <input
            type="range"
            value={totalTokens}
            min={10}
            max={200}
            step={10}
            onChange={(e) => setTotalTokens(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            <span className="text-accent-secondary">$PRO:</span>{" "}
            <span className="font-sfmono mr-2 p-1 bg-dark rounded-md">
              {proPortion}
            </span>{" "}
            |<span className="text-accent-primary ml-2">$ANTI:</span>{" "}
            <span className="font-sfmono p-1 bg-dark rounded-md">
              {totalTokens - proPortion}
            </span>
          </label>
          <input
            type="range"
            value={proPortion}
            min={0}
            max={totalTokens}
            step={1}
            onChange={(e) => setProPortion(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex flex-row justify-between w-full gap-6">
          <div className="mb-4 w-1/2">
            <label className="block text-sm font-medium mb-2">
              T<sub>μ</sub>:{" "}
              <span className="font-sfmono mr-2 p-1 bg-dark rounded-md">
                {tMean}
              </span>
            </label>
            <input
              type="range"
              value={tMean}
              min={1}
              max={100}
              step={1}
              onChange={(e) => setTMean(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-4 w-1/2">
            <label className="block text-sm font-medium mb-2 text-right">
              T
              <sub>
                σ<sup>2</sup>
              </sub>
              :{" "}
              <span className="font-sfmono mr-2 p-1 bg-dark rounded-md">
                {tVariance}
              </span>
            </label>
            <input
              type="range"
              value={tVariance}
              min={1}
              max={50}
              step={1}
              onChange={(e) => setTVariance(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="h-64 mt-4 -mb-24 lg:-mb-16">
          <AreaChart
            width={isMobile ? 400 : 600}
            height={isMobile ? 175 : 200}
            data={userData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#ccc"
              strokeWidth={0.25}
            />
            <XAxis
              dataKey="x"
              tick={{ fontSize: 12, fontFamily: "SF Mono Round", fill: "#ccc" }}
              axisLine={{ stroke: "#ccc" }}
              tickLine={{ stroke: "#ccc" }}
            />
            <YAxis
              tick={{ fontSize: 12, fontFamily: "SF Mono Round", fill: "#ccc" }}
              axisLine={{ stroke: "#ccc" }}
              tickLine={{ stroke: "#ccc" }}
            />
            <Area
              type="monotone"
              dataKey="y"
              stroke="#ffffff"
              fill="#c4c4c4"
              fillOpacity={0.25}
              strokeWidth={1.0}
            />
            <Area
              type="monotone"
              data={truthData}
              dataKey="y"
              stroke="#00ff00"
              fill="#00ff00"
              fillOpacity={0.15}
              strokeWidth={1.0}
            />
          </AreaChart>
        </div>
        {/* Overlap Area */}
        <div className="text-center mt-6 -mb-2 lg:-mb-4">
          <p className="text-sm font-medium">
            Overlap (𝜪):{" "}
            <span className="font-sfmono p-1 bg-dark rounded-md">
              {overlap}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
